import gql from 'graphql-tag';
export const UPLOADFILE = gql `
    mutation uploadFile ($file: Upload!) {
        uploadFile(file: $file){
            url
        }
    }
`