declare const omitUndefinedProperties: (obj?: {}) => Record<string, any>;
declare const callAllHandlers: <EventType extends Object>(...handlers: ((event: EventType) => void)[]) => (event: EventType) => void;
declare const useHasValue: <ValueType>({ defaultValue, value }: {
    defaultValue?: ValueType | undefined;
    value?: ValueType | undefined;
}) => (boolean | ((e: React.ChangeEvent<HTMLInputElement>) => void))[];
declare const useIdList: (uniqueIdPrefix: string, initialList?: string[]) => [idList: string[], useRegisteredId: (id: string | undefined) => string | undefined];
declare const mergeAttributeValues: (...values: (string | undefined)[]) => string | undefined;
export { callAllHandlers, useHasValue, mergeAttributeValues, useIdList, omitUndefinedProperties, };
