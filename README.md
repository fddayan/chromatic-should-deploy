# Chromatic should deploy

Builds storybook from current commit and previous commit and compare files. If there is a difference creates output variable `should_deploy` equal to `true`.
It stories a hash of the current storybook build as an artifact, so it can later be used and there is no need to build storybook for the previous commit. 
If it's a new branch there is not going to a storybook build, in that scenario, it checkouts the previous branch and builds storybook and generates the hash. 

```
inputs:
  artifactName:
    required: true  
    description: "The artifact name to store"
  previousSha:
    required: false
    description: "Previous sha commit to checkout to build storybook in case artifact is not present."
    default: ${{github.event.before}}
  GITHUB_TOKEN:
    description: 'The GitHub access token (e.g. secrets.GITHUB_TOKEN) used to create or update the comment. This defaults to {{ github.token }}.'
    default: '${{ github.token }}'
    required: false
  storybookBuildCommand:
    description: Command to run to build storybook.
    required: false
    default: npm run build-storybook
  debug:
    description: 'if set to true it will upload the output of storybook build as artifacts.'    
    required: false
    default: false
  checkoutRepoFolder:
    description: 'The folder to checkout the second repository with the previous commit to build Storybook' 
    required: false
    default: 'previous'
  storybookStaticDir:
    description: 'Output build directory for Storybook'
    required: false
    default: 'storybook-static'
  artifactWorkflow:
    description: 'Workflow to look for artifacts uploaded by this action'
    required: true
  artifactBranch:
    description: 'The branch to look for artifacts uploaded by this action'
    required: false
    default: ${{ github.event.pull_request.head.ref }}
  artifactDownloadPath:
    description: 'The path to download the artifacts uploaded by this action'
    required: false
    default: 'storybook-hash'
outputs:
  shouldDeploy:
    description: TRUE/FALSE value if it should deploy chromatic based on previous build
    value: ${{ steps.chromatic-checker.outputs.shouldDeploy }}
```