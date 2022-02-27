# Chromatic should deploy

Builds storybook from current commit and previous commit and compare files. If there is a difference creates output variable `should_deploy` equal to `true`.
It stories a hash of the current storybook build as an artifact, so it can later be used and there is no need to build storybook for the previous commit. 
If it's a new branch there is not going to a storybook build, in that scenario, it checkouts the previous branch and builds storybook and generates the hash. 


```
outputs:
  should_deploy:
    description: TRUE/FALSE value if it should deploy chromatic based on previous build
    value: ${{ steps.chromatic-checker.outputs.should_deploy }}
```