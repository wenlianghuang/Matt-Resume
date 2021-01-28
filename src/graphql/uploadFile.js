import gql from 'graphql-tag';
export const UPLOADFILE = gql `
    mutation($file: Upload!) {
        uploadFile(file: $file)
    }
`