import {
    Attribute, AttributeType,
    Element,
    EventAttribute,
    Lifecycle,
    Style,
    Template,
    Partial
} from "@springtype/core";
import template from "./MWCRadio.tpl";
import style from "./MWCRadio.tss";
import {MDCRipple} from "@material/ripple/component";


@Element("mwc-radio")
@Template(template)
@Style(style)
export class MWCRadio extends HTMLElement implements Lifecycle {

    @Attribute(AttributeType.BOOLEAN)
    checked = false;

    @Attribute(AttributeType.BOOLEAN)
    indeterminate = false;

    @Attribute(AttributeType.BOOLEAN)
    disabled = false;

    @Attribute(AttributeType.BOOLEAN)
    ripple = true;

    @Attribute
    value = '';

    @Attribute
    name = '';

    @Attribute
    label = '';

    @EventAttribute
    onchange = (evt: Event) => {};

    constructor(protected radio: HTMLButtonElement) {
        super();
    }

    onFlow(initial: boolean) {
        if (initial && this.ripple) {
            MDCRipple.attachTo(this.radio);
        }
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "mwc-radio": Partial<MWCRadio>;
        }
    }
}