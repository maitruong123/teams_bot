import * as React from "react";
import { Provider, Flex, Text, Button, Header } from "@fluentui/react-northstar";
import TeamsBaseComponent, { ITeamsBaseComponentState } from "msteams-react-base-component";
import * as microsoftTeams from "@microsoft/teams-js";

/**
 * State for the aboutBotv4BotTab React component
 */
export interface IAboutBotv4BotTabState extends ITeamsBaseComponentState {

}

/**
 * Properties for the aboutBotv4BotTab React component
 */
export interface IAboutBotv4BotTabProps {

}

/**
 * Implementation of the aboutBotv4Bot content page
 */
export class AboutBotv4BotTab extends TeamsBaseComponent<IAboutBotv4BotTabProps, IAboutBotv4BotTabState> {

    public async componentWillMount() {
        this.updateTheme(this.getQueryVariable("theme"));

        if (await this.inTeams()) {
            microsoftTeams.initialize();
            microsoftTeams.registerOnThemeChangeHandler(this.updateTheme);
            microsoftTeams.appInitialization.notifySuccess();
        }
    }

    /**
     * The render() method to create the UI of the tab
     */
    public render() {
        return (
            <Provider theme={this.state.theme}>
                <Flex fill={true} column styles={{
                    padding: ".8rem 0 .8rem .5rem"
                }}>
                    <Flex.Item>
                        <Header content="Welcome to the botv4 Bot bot page" />
                    </Flex.Item>
                    <Flex.Item>
                        <div>
                            <Text content="TODO: Add you content here" />
                        </div>
                    </Flex.Item>
                    <Flex.Item styles={{
                        padding: ".8rem 0 .8rem .5rem"
                    }}>
                        <Text size="smaller" content="(C) Copyright Plott" />
                    </Flex.Item>
                </Flex>
            </Provider>
        );
    }
}
