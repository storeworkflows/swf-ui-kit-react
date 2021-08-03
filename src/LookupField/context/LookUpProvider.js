import {LookUpContext} from "./LookUpContext";
import {noop} from "../../utils";
import {useState} from "@storybook/addons";
import {glRequest} from "../requests/graphql/request";
import {useEffect, useRef} from "react";

export const LookUpProvider = (props) => {
    const [context, setContext] = useState({
        props,
        chars: "**",
        setChars: noop,
        loading: false,
        focused: false,
        setFocused: noop,
        searchResults: [],
        setSearchResults: noop,
        isGlideList: false,
        isReference: true
    });

    const abortController = useRef(new AbortController());

    const searchRecords = async () => {
        setContext({...context, loading: true});

        const result = await glRequest({
            chars: context.chars,
            name: props.name,
            sys_id: props.tableRecordSysId,
            table: props.table,
            controller: abortController
        });

        setContext({
            ...context,
            searchResults: result,
            loading: false
        });
    }

    useEffect(() => {
        searchRecords();
    }, [context.chars]);

    return <LookUpContext.Provider value={context}>
        {props.children}
    </LookUpContext.Provider>
}