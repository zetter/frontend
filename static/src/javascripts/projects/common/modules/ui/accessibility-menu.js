// @flow

// ----- Imports ----- //

import React, { Component } from 'react';
import { render } from 'react-dom';
import $ from 'lib/$';

// ----- Types ----- //

type State = {
    isOpen: boolean,
};

type MenuTogglePropTypes = {
    isOpen: boolean,
    toggle: (open: boolean) => void,
};

type DropDownState = {
    lowContast: boolean,
    nightMode: boolean,
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

// ----- Components ----- //

const MenuToggle = (props: MenuTogglePropTypes) => {
    const onClick = () => {
        props.toggle(!props.isOpen);
    };

    return (
        <a
            className="top-bar__item--dropdown hide-until-desktop js-a11y-toggle"
            onClick={onClick}>
            Accessibility
        </a>
    );
};

class DropDown extends Component<{}, DropDownState> {
    constructor() {
        super();
        this.state = {
            lowContrast: false,
            nightMode: false,
        };
    }

    toggleLowContrast() {
        if (this.state.lowContrast) {
            removeStyle('a11y-low-contrast');
            this.setState({
                lowContrast: false,
            });
        } else {
            addStyle(
                'a11y-low-contrast',
                `
                    body {
                        background-color: #fafac8;
                    }
                `
            );
            this.setState({
                lowContrast: true,
            });
        }
    }

    toggleNightMode() {
        if (this.state.nightMode) {
            removeStyle('a11y-night-mode');
            this.setState({
                nightMode: false,
            });
        } else {
            addStyle(
                'a11y-night-mode',
                `
                    body{
                        background-color: #121212;
                    }
                    .content, .content__standfirst {
                        color: #999 !important;
                    }
                    .u-underline {
                        text-decoration-color: #999 !important;
                    }
                `
            );
            this.setState({
                nightMode: true,
            });
        }
    }

    render() {
        if (!this.props.isOpen) {
            return <span />;
        }

        return (
            <ul className="dropdown-menu dropdown-menu--open">
                <li className="dropdown-menu__item">
                    <label
                        className="dropdown-menu__title"
                        htmlFor="a11y-menu-night">
                        <input
                            id="a11y-menu-night"
                            type="checkbox"
                            onChange={this.toggleNightMode.bind(this)}
                        />
                        Night Mode
                    </label>
                </li>
                <li className="dropdown-menu__item">
                    <label
                        className="dropdown-menu__title"
                        htmlFor="a11y-menu-font">
                        <input id="a11y-menu-font" type="checkbox" />
                        Readable Font
                    </label>
                </li>
                <li className="dropdown-menu__item">
                    <label
                        className="dropdown-menu__title"
                        htmlFor="a11y-menu-background">
                        <input
                            id="a11y-menu-background"
                            type="checkbox"
                            onChange={this.toggleLowContrast.bind(this)}
                        />
                        Low Contrast
                    </label>
                </li>
                <li className="dropdown-menu__item">
                    <label
                        className="dropdown-menu__title"
                        htmlFor="a11y-menu-lineheight">
                        <input id="a11y-menu-lineheight" type="checkbox" />
                        Line Height
                    </label>
                </li>
                <li className="dropdown-menu__item">
                    <label
                        className="dropdown-menu__title"
                        htmlFor="a11y-menu-animation">
                        <input id="a11y-menu-animation" type="checkbox" />
                        Reduce Animation
                    </label>
                </li>
            </ul>
        );
    }
}

class AccessibilityMenu extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    toggle(isOpen: boolean) {
        this.setState({ isOpen });
    }

    render() {
        return (
            <div>
                <MenuToggle
                    isOpen={this.state.isOpen}
                    toggle={this.toggle.bind(this)}
                />
                <DropDown isOpen={this.state.isOpen} />
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
