import type { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';

dotenv.config();

const config: CodegenConfig = {
  overwrite: true,
  schema: `${process.env.API_URL}/graphql`,
  documents: ['src/**/*.gql.ts*'],
  ignoreNoDocuments: true,
  generates: {
    // 'src/generated/': {
    //   preset: 'client',
    // },
    'src/generated/generated.tsx': {
      // preset: 'client',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withComponent: false,
        withHooks: true,
        withMutationFn: true,
        withRefetchFn: true,
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
