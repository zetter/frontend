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

type MenuPropTypes = {
    isOpen: boolean,
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

class DropDown extends Component {
    constructor() {
        super();
        this.state = {
            lowContrast: false,
        };
    }

    toggleLowContrast() {
        if (this.state.lowContrast) {
            const lowContrastStyles = document.getElementsByClassName('a11y-low-contrast')[0];

            lowContrastStyles.parent.removeChild(lowContrastStyles);
            this.setState('lowContrast', false);
        } else {
            const lowContrastStyles = document.createElement('style');

            lowContrastStyles.setAttribute('class', 'a11y-low-contrast');
            lowContrastStyles.innerHTML = `
                body {
                    background-color: red;
                }
            `;
            $('head').append(lowContrastStyles);
            this.setState('lowContrast', true);
        }

    }

    render() {
        if (!this.props.isOpen) {
            return <span />;
        }

        return (<ul className="dropdown-menu dropdown-menu--open">
            <li className="dropdown-menu__item">
                <label className="dropdown-menu__title" htmlFor="a11y-menu-night">
                    <input id="a11y-menu-night" type="checkbox" />
                    Night Mode
                </label>
            </li>
            <li className="dropdown-menu__item">
                <label className="dropdown-menu__title" htmlFor="a11y-menu-font">
                    <input id="a11y-menu-font" type="checkbox" />
                    Readable Font
                </label>
            </li>
            <li className="dropdown-menu__item">
                <label
                    className="dropdown-menu__title"
                    htmlFor="a11y-menu-background">
                    <input id="a11y-menu-background" type="checkbox" onChange={this.toggleLowContrast.bind(this)} />
                    Yellow Background
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
        </ul>);
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
