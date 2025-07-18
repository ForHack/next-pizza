"use client";

import {FilterChecboxProps, FilterCheckbox} from "@/shared/components/shared/filter-checkbox";
import {Input, Skeleton} from "@/shared/components/ui";
import {ChangeEvent, useState} from "react";

type Item = FilterChecboxProps;

interface Props {
    title: string;
    items: Item[];
    defaultItems?: Item[];
    limit?: number;
    loading?: boolean;
    searchInputPlaceholder?: string;
    className?: string
    onClickCheckbox?: (id: string) => void;
    selected?: Set<string>;
    defaultValue?: string[];
    name?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
                                                          title,
                                                          items,
                                                          defaultItems,
                                                          limit = 5,
                                                          searchInputPlaceholder = 'Поиск...',
                                                          className,
                                                          onClickCheckbox,
                                                          defaultValue,
                                                          selected,
                                                          loading,
                                                          name
                                                      }) => {

    const [showAll, setShowAll] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    if (loading) {
        return (
            <div className={className}>
                <p className="font-bold mb-3">{title}</p>

                {
                    ...Array(limit).fill(0)
                        .map((_, index) => (
                            <Skeleton key={index} className="h-6 mb-4 rounded-lg"/>
                        ))
                }

                <Skeleton className="w-28 h-6 mb-4 rounded-lg"/>
            </div>
        )
    }

    const list = showAll
        ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLocaleLowerCase()))
        : (defaultItems || items).slice(0, limit);

    return (
        <div className={className}>
            <p className="font-bold mb-3">{title}</p>

            {showAll && (
                <div className="mb-5">
                    <Input
                        onChange={onChangeSearchInput}
                        placeholder={searchInputPlaceholder} className="bg-gray-50 border-none"/>
                </div>
            )}

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {list.map((item) => (
                    <FilterCheckbox
                        key={String(item.value)}
                        text={item.text}
                        value={item.value}
                        endAdornment={item.endAdornment}
                        checked={selected?.has(item.value)}
                        onCheckedChange={() => onClickCheckbox?.(item.value)}
                        name={name}
                    />
                ))}
            </div>


            {items.length > limit && (
                <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                    <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
                        {showAll ? 'Скрыть' : '+ Показать все'}
                    </button>
                </div>
            )}
        </div>
    );
}
