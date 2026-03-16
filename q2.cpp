// #include <cmath>
// #include <cstdio>
// #include <vector>
// #include <iostream>
// #include <algorithm>
// #include <stack>
// using namespace std;


// int main() {
//     /* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
//     int n = 7;
//     // cin>>n;

//     vector<int> ans;
//     vector<vector<int>> nextDivident(n, vector<int>(n));
//     vector<int> vec = {1,2,5,7,14,16,25};
      
//     sort(vec.begin(), vec.end());
    
//     for(int i=0; i<n; ++i) {
//       for(int j = i+1; j<n; ++j) {
//         if(vec[j]%vec[i] == 0) {
//             nextDivident[i].push_back(j);
//         }
//       }
//     }

//     vector<int> dp(n, 0);
//     dp[n-1] = 1;

//     for(int i=n-2; i>=0; --i) {
//         dp[i] = dp[nextDivident[i]]+1;
//     }

//     // for(int i:nextDivident) cout<<i<<" ";
//     int index=max_element(vec.begin(), vec.end()) - vec.begin();
//      while(index < n) {
//         cout<<vec[index]<<" ";
//         index = nextDivident[index];
//     }

//     return 0;
// }


#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <stack>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
    int n = 120;
    // cin>>n;

    vector<int> ans;
    vector<int> nextDivident(n, n);
    vector<int> vec = {
694, 1623, 1811, 501, 3153, 65, 804, 3227, 4559, 4252,
2375, 3675, 4003, 4792, 1780, 3466, 686, 3018, 1804, 2138,
4795, 1365, 3533, 1573, 2937, 943, 524, 227, 4308, 3700,
1653, 975, 4073, 3261, 2102, 1698, 345, 1769, 1199, 858,
1622, 3756, 3097, 2963, 4477, 1240, 859, 4885, 3997, 1216,
4620, 3326, 3468, 4270, 4059, 2642, 4084, 4085, 1655, 4447,
4996, 1793, 80, 2788, 2608, 2637, 291, 4302, 2105, 4937,
1278, 3105, 4776, 2412, 3854, 544, 4232, 323, 1844, 1070,
333, 2462, 126, 2709, 1317, 1220, 3775, 3042, 4137, 3132,
4341, 4116, 276, 4702, 743, 4244, 4917, 626, 3493, 1689,
2373, 4387, 4904, 3423, 3951, 3184, 4977, 4804, 1914, 168,
2, 1491, 2478, 4153, 4672, 2085, 2726, 538, 4043, 2147
};

      
    sort(vec.begin(), vec.end());
    for(int i:vec) cout<<i<<"\n";
    
    // for(int i=0; i<n; ++i) {
    //   for(int j = i+1; j<n; ++j) {
    //     if(vec[j]%vec[i] == 0) {
    //     nextDivident[i] = j;
    //     break;}
    //   }
    // }

    // vector<int> dp(n, 0);
    // dp[n-1] = 1;

    // for(int i=n-2; i>=0; --i) {
    //     if(nextDivident[i]<n)
    //     dp[i] = dp[nextDivident[i]]+1;

    //     else dp[i] = 1;
    // }

    // for(int val : nextDivident) cout<<val<<" ";


    // for(int val : dp) cout<<val<<" ";

    // int index = max_element(dp.begin(), dp.end()) - dp.begin();
    // while(index < n) {
    //     cout<<vec[index]<<" ";
    //     index = nextDivident[index];
    // }

    return 0;
}
