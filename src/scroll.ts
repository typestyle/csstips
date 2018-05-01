/**
 * @module scroll helpers
 */
import * as types from 'typestyle/lib/types';

export const scroll: types.CSSProperties = {
  '-webkit-overflow-scrolling': 'touch',
  overflow: 'auto'
};

export const scrollX: types.CSSProperties = {
  '-webkit-overflow-scrolling': 'touch',
  overflowX: 'auto'
};

export const scrollY: types.CSSProperties = {
  '-webkit-overflow-scrolling': 'touch',
  overflowY: 'auto'
};

/**
 * If you expect a child somewhere down in the tree to scroll
 * you need to tell the browser to prevent a scroll bar. 
 * Use : `parent(someChildWillScroll) > child(scroll)`
 */
export const someChildWillScroll: types.NestedCSSProperties = {
    overflow: 'hidden'
}
