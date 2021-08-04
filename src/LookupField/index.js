import { Component, useContext, useRef } from 'react';

import { LookUpProvider } from './context/LookUpProvider';
import { SearchResult } from './templates/SearchResult';
import { LookUpContext } from './context/LookUpContext';
import { GlideReference } from './logic/GlideReference';
import { GlideList } from './logic/GlideList';

const Field = () => {
  const {
    props: {
      type,
      internalRef = useRef(),
      visible = true,
    }, setFocused,
  } = useContext(LookUpContext);

  const target = useRef();

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const isGlideList = type === 'glide_list';
  const isReference = !isGlideList;

  return (
    <>
      {
            visible && (
            <div
              className="swf-reference"
              tabIndex="0"
              onFocus={onFocus}
              onBlur={onBlur}
              ref={(elm) => internalRef.current = elm}
            >
              {isGlideList && <GlideList intRef={target} />}
              {isReference && <GlideReference intRef={target} />}
              <SearchResult target={target} />
            </div>
            )
        }
    </>
  );
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Что-то пошло не так.</h1>;
    }

    return this.props.children;
  }
}

export const LookupField = (props) => (
  <ErrorBoundary>
    <LookUpProvider {...props}>
      <Field />
    </LookUpProvider>
  </ErrorBoundary>
);
