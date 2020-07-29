import * as React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { Header } from "@fluentui/react-northstar";

import { AboutBotv4BotTab } from "../AboutBotv4BotTab";

describe("AboutBotv4Bot Component", () => {
    // Snapshot Test Sample
    it("should match the snapshot", () => {
        const wrapper = shallow(<AboutBotv4BotTab />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Component Test Sample
    it("should render the tab", () => {
        const component = shallow(<AboutBotv4BotTab />);
        const divResult = component.containsMatchingElement(<Header content="Welcome to the botv4 Bot bot page" />);
        expect(divResult).toBeTruthy();
    });
});
