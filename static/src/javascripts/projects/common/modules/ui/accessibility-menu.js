// @flow

// ----- Imports ----- //

import React from 'react';
import { render } from 'react-dom';

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
    const onClick = () => props.toggle(!props.isOpen);

    return (
        <a
            className="top-bar__item--dropdown hide-until-desktop js-a11y-toggle"
            onClick={onClick}>
            Accessibility
        </a>
    );
};

const DropDown = (props: MenuPropTypes) => (
    <ul className="dropdown-menu dropdown-menu--open">
        <li className="dropdown-menu__item">
            <p className="dropdown-menu__title">Night Mode</p>
        </li>
        <li className="dropdown-menu__item">
            <p className="dropdown-menu__title">Readable Font</p>
        </li>
        <li className="dropdown-menu__item">
            <p className="dropdown-menu__title">Yellow Background</p>
        </li>
        <li className="dropdown-menu__item">
            <p className="dropdown-menu__title">Line Height</p>
        </li>
        <li className="dropdown-menu__item">
            <p className="dropdown-menu__title">Reduce Animation</p>
        </li>
    </ul>
);

const AccessibilityMenu = (props: MenuTogglePropTypes) => (
    <div>
        <MenuToggle isOpen={props.isOpen} toggle={props.toggle} />
        <DropDown isOpen={props.isOpen} />
    </div>
);

const initAccessibilityMenu = () => {
    const a11yMenu = document.getElementById('a11y-menu');

    if (a11yMenu) {
        const state: State = {
            isOpen: false,
        };

        render(
            <AccessibilityMenu
                isOpen={state.isOpen}
                toggle={(isOpen: boolean) => {
                    state.isOpen = isOpen;
                }}
            />,
            a11yMenu
        );
    }
};

export { initAccessibilityMenu };
