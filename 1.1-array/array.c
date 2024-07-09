#include <stdio.h>

int main()
{
    int arr[] = {1, 2, 3, 4};
    printf("%d\n", &arr[0]); // 6422288
    printf("%d\n", &arr[1]); // 6422292
    printf("%d\n", &arr[2]); // 6422296
    printf("%d\n", &arr[3]); // 6422300
    return 0;
}
