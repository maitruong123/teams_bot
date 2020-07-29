import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Header } from "@fluentui/react-northstar";

import { Botv4MessageExtensionConfig } from "../Botv4MessageExtensionConfig";

describe("Botv4MessageExtensionConfig Component", () => {
    // Snapshot Test Sample
    it("should match the snapshot", () => {
        const wrapper = shallow(<Botv4MessageExtensionConfig />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Component Test Sample
    it("should render the tab", () => {
        const component = shallow(<Botv4MessageExtensionConfig />);
        const divResult = component.containsMatchingElement(<Header content="botv4 Message Extension configuration" />);

        expect(divResult).toBeTruthy();
    });
});


