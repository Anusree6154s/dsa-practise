<img src='https://assets.leetcode.com/static_assets/media/original_images/31_Next_Permutation.gif' width=500/>

#### Visual Approach
  [visualApproach](https://imgur.com/x9ZUUlz)

#### Explanation
- lexicographically highest also means number wise highest
- lexicographically next highest number after 312 is 321

- edge case: if numner is 321 (highest), next lexicographically high permutaion is 123 (lowest)
- means in edge case ust return the reverse of teh entire descdening arr

- find the break point: starting from bakc, where element<elemet

```
[3,2,5, 4, 1, 0]
     /\
 \  /  \_
  \/     \_
           \_
  ↑
  breakpoint(2<5)
```

- find in the prev eles, ele just greater than the breakpoint ele (1)
- swap that larger ele with breakpoint ele
- reverse teh entire arr aftert eh breakpoint index (watch striver youttub efor explanation)
  ``
