type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods, additional: string[]): string {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className),
        ...additional,
    ].join(' ');
}

classNames('remove-btn', {hovered: true, setselectable: true, red: true}, ['str', 'cls'])