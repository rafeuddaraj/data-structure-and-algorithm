#include <stdio.h>

int main()
{
    int size;
    scanf("%d ", &size);
    char str[size];
    gets(str);
    int i = 0;
    while (str[i])
    {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
        {
            printf("%d ", i);
        }
        i++;
    }
    return 0;
}