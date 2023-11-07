#! /bin/bash
pants --tag='-wheel' package '::'
# NOTE: 'pants run' does not support parallelization
pants filter --filter-tag-regex='checksum' '::' | xargs -n 1 pants run
