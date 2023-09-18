export declare function plainToClass<TModel, TEntity>(plainObject: TModel, targetClass: new () => TEntity): TEntity;
export declare function plainToClassMany<TModel, TEntity>(plainList: TModel[], targetClass: new () => TEntity): TEntity[];
