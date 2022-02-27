# Chromatic should deploy

Builds storybook from current commit and previous commit and compare files. If there is a difference creates output variable `should_deploy` equal to `true`.
It stories a hash of the current storybook build as an artifact, so it can later be used and there is no need to build storybook for the previous commit. 
If it's a new branch there is not going to a storybook build, in that scenario, it checkouts the previous branch and builds storybook and generates the hash. 

Output
* should deploy (true/false)