import { PropType } from "vue";
import RadioGroupOptions from '../types/RadioGroupOptions';
declare const _default: import("vue").DefineComponent<{
    options: {
        type: PropType<RadioGroupOptions[]>;
    };
    value: {
        type: PropType<string | number>;
    };
}, {
    checkRadio: ({ target }: {
        target: any;
    }) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: PropType<RadioGroupOptions[]>;
    };
    value: {
        type: PropType<string | number>;
    };
}>>, {}>;
export default _default;
