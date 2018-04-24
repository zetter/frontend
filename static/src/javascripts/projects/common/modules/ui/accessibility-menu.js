// @flow

// ----- Imports ----- //

import React from 'react';
import { render } from 'react-dom';
import $ from 'lib/$';

// ----- Types ----- //

type A11ySettings = {
    lowContrast: boolean,
    nightMode: boolean,
};

type A11ySettingName = $Keys<A11ySettings>;

type State = A11ySettings & {
    isOpen: boolean,
};

type MenuTogglePropTypes = {
    isOpen: boolean,
    toggle: (open: boolean) => void,
};

type DropDownItemPropTypes = {
    onChange: () => void,
    checked: boolean,
    id: string,
    text: string,
};

type DropDownPropTypes = {
    isOpen: boolean,
    toggleSetting: A11ySettingName => void,
    getSetting: A11ySettingName => boolean,
    settings: A11ySettingName[],
};

// ----- CSS ----- //

const settings: {
    [A11ySettingName]: {
        labelText: string,
        css: string,
    },
} = {
    lowContrast: {
        labelText: 'Low Contrast',
        css: `
            body {
                background-color: #fafac8;
            }
        `,
    },
    nightMode: {
        labelText: 'Night Mode',
        css: `
            body{
                background-color: #121212;
            }
            .content, .content__standfirst {
                color: #999 !important;
            }
            .u-underline {
                text-decoration-color: #999 !important;
            }
        `,
    },
};

// ----- Functions ----- //

const addStyle = (className: string, rules: string) => {
    const elem = document.createElement('style');

    elem.setAttribute('class', className);
    elem.innerHTML = rules;
    $('head').append(elem);
};

const removeStyle = (className: string) => {
    const elem = document.getElementsByClassName(className)[0];

    if (elem && elem.parentNode) elem.parentNode.removeChild(elem);
};

const toggle = (setting: A11ySettingName, state: State, setState: Function) => {
    if (state[setting]) {
        removeStyle(`a11y-${setting}`);
        setState({ [setting]: false });
    } else {
        addStyle(`a11y-${setting}`, settings[setting].css);
        setState({ [setting]: true });
    }
};

// ----- Components ----- //

const MenuToggle = (props: MenuTogglePropTypes) => (
    <a
        className="top-bar__item--dropdown hide-until-desktop js-a11y-toggle"
        onClick={() => props.toggle(!props.isOpen)}>
        Accessibility
    </a>
);

const DropDownItem = (props: DropDownItemPropTypes) => (
    <li className="dropdown-menu__item">
        <label
            className="dropdown-menu__title"
            htmlFor={`a11y-menu-${props.id}`}>
            <input
                id={`a11y-menu-${props.id}`}
                type="checkbox"
                onChange={props.onChange}
                checked={props.checked}
            />
            {props.text}
        </label>
    </li>
);

const DropDown = (props: DropDownPropTypes) => {
    if (!props.isOpen) {
        return <span />;
    }

    return (
        <ul className="dropdown-menu dropdown-menu--open">
            {props.settings.map(setting => (
                <DropDownItem
                    onChange={() => props.toggleSetting(setting)}
                    checked={props.getSetting(setting)}
                    id={setting}
                    text={settings[setting].labelText}
                    key={setting}
                />
            ))}
        </ul>
    );
};

class AccessibilityMenu extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            lowContrast: false,
            nightMode: false,
        };
    }

    getSetting(setting: A11ySettingName): boolean {
        return this.state[setting];
    }

    toggleSetting(setting: A11ySettingName) {
        toggle(setting, this.state, this.setState.bind(this));
    }

    toggleMenu(isOpen: boolean) {
        this.setState({ isOpen });
    }

    render() {
        return (
            <div>
                <MenuToggle
                    isOpen={this.state.isOpen}
                    toggle={this.toggleMenu.bind(this)}
                />
                <DropDown
                    isOpen={this.state.isOpen}
                    toggleSetting={this.toggleSetting.bind(this)}
                    getSetting={this.getSetting.bind(this)}
                    settings={Object.keys(settings)}
                />
            </div>
        );
    }
}

const initAccessibilityMenu = () => {
    const a11yMenu = document.getElementById('a11y-menu');

    if (a11yMenu) {
        render(<AccessibilityMenu />, a11yMenu);
    }
};

export { initAccessibilityMenu };
