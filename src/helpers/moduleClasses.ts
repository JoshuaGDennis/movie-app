import classNames from 'classnames/bind'
import { ClassNamesFn } from 'classnames/types';

function moduleClasses(module: { readonly [key: string]: string; }): ClassNamesFn {
    return classNames.bind(module)
}

export default moduleClasses