import {UseComponent, WebComponent, WebComponentLifecycle} from "@springtype/springtype-incubator-core";
import template from "./FeatureExample.tpl";
import {BurgerButton} from "../../../burger-button/src/burger-button/BurgerButton";
import {BurgerExample} from "../components/burger/BurgerExample";

interface BurgerButtonProps {
    menuItems: Array<string>;
    fill: string;
}

@WebComponent({
    tag: 'feature-example',
    template
})
@UseComponent(BurgerExample)
export class FeatureExample extends HTMLElement implements WebComponentLifecycle {

    constructor(
        public props: BurgerButtonProps,
        public btn: HTMLButtonElement
    ) {
        super();
    }

    init(): void {
        this.props.fill = this.props.fill || 'yellow';
        this.props.menuItems = this.props.menuItems || [];
    };


    // event listeners
    onButtonClick = (evt: Event) => {

        console.log('Burger button was clicked', evt, this.props.menuItems, evt.currentTarget);
        console.log('Access element via this.btn', this.btn);
    };

    onSVGButtonClick = (evt: Event) => {

        console.log('clicked on SVG button', evt.target);
    };
}