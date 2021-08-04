import {useEffect, useRef, useState} from "react";

import {glRequest} from "../requests/graphql/request";
import {LookUpContext} from "./LookUpContext";
import {noop} from "../../utils";
import _ from "lodash";

export const LookUpProvider = (props) => {
    const [context, setContext] = useState({
        props,
        chars: "",
        setChars: noop,
        loading: false,
        focused: false,
        setFocused: noop,
        searchResults: [],
        setSearchResults: noop,
        isGlideList: false,
        isReference: true,
        subscribers: [],
        setSubscriber: noop
    });

    const abortController = useRef();

    const setChars = (chars) => {
        setContext(_ => ({
            ..._,
            chars
        }))

    };

    const setFocused = (focused) => {
        setContext(_ => ({
            ..._,
            focused
        }));

    };

    const setSubscriber = (subscriber) => {
        setContext(_ => ({
            ..._,
            subscribers: [..._.subscribers, subscriber]
        }));

    };

    const searchRecords = async () => {
        setContext({...context, loading: true});

        if (abortController?.current) {
            abortController.current.abort();
        }

        abortController.current = new AbortController();

        const result = await glRequest({
            chars: context.chars || "**",
            name: props.name,
            sys_id: props.tableRecordSysId,
            table: props.table,
            controller: abortController
        });

        const {
            referenceDataList,
            referenceRecentDataList,
            totalCount
        } = _.get(result, "[0].data.GlideLayout_Query.referenceDataRetriever");

        setContext({
            ...context,
            searchResults: [...referenceDataList, ...referenceRecentDataList],
            loading: false
        });
    };

    useEffect(() => {
        setContext(_ => ({
            ..._,
            setChars,
            setFocused,
            setSubscriber
        }));
    }, []);

    useEffect(() => {
        context.focused && searchRecords();
    }, [context.chars, context.focused]);

    return <LookUpContext.Provider value={context}>
        {props.children}
    </LookUpContext.Provider>
}