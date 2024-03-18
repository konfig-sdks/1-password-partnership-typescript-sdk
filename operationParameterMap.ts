type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/api/v1/partners/accounts-POST': {
        parameters: [
            {
                name: 'customer_account_uid'
            },
            {
                name: 'account_type'
            },
            {
                name: 'domain'
            },
            {
                name: 'ends_at'
            },
        ]
    },
    '/api/v1/partners/accounts/{customer_account_uid}-GET': {
        parameters: [
            {
                name: 'customer_account_uid'
            },
        ]
    },
    '/api/v1/partners/accounts/{customer_account_uid}-DELETE': {
        parameters: [
            {
                name: 'customer_account_uid'
            },
        ]
    },
    '/api/v1/partners/accounts/{customer_account_uid}-PATCH': {
        parameters: [
            {
                name: 'ends_at'
            },
            {
                name: 'customer_account_uid'
            },
        ]
    },
}