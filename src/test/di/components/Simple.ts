import {Autowired, Bean, Inject} from "@springtype/core";
import {Multiplier} from "./Multiplier";
import {Subtractor} from "./Subtractor";
import {NiceSubtractor} from "./NiceSubtractor";
import {SimpleMock} from "../mock/SimpleMock";

@Bean({
    mockedBy: SimpleMock
})
export class Simple {

    constructor(
        protected multiplier?: Multiplier
    ) {
    }

    @Autowired
    calc(a: number, b: number, @Inject(NiceSubtractor) subtractor?: Subtractor): number {

        if (subtractor && this.multiplier) {
            return subtractor.subtract(
                this.multiplier.multiply(a, b), a
            );
        }
        return NaN;
    }
}