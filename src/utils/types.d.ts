type Vid = {
    id: number
}

type Sid = {
    id: number
    val: string
}

export type Category = {
    sortOrder: number
    name: string
    optionalDisplayDescription: string
    optionalDescription: string
    isResourceCategory: boolean
    sid: Sid
}

export type Feature = {
    vid: Vid
    startDateToEpochMilli: number
    isDeleted: boolean
    displayName: string
    epKeywords: string[]
    categorySid: Sid
    optionalEndDate: date
    optionalDescription: string
    startDate: date
    sid: Sid
    statusCode: string

}