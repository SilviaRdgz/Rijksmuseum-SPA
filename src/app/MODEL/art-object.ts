export interface ArtObject {
    objectNumber: Number;
    webImage: {
        url: string,
    };
    title: string,
    principalOrFirstMaker: string,
    productionPlaces: [String];
    principalMaker: string | undefined,
    principalMakers:[
        {
            placeOfBirth: string,
            dateOfBirth: Date,
            dateOfDeath: Date,
            occupation: [string],
        },
    ]
    label: {
        description: string,
        title: string;
    }
}
export interface ArtObjectResponse {
    artObjects: ArtObject[]
}
export interface ArtObjectDetailResponse {
    artObject : ArtObject,
    artObjectPage: null,
    elapsedMilliseconds: number,
}
