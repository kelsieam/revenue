"""
given two strings, write a method to decide if 
one is a permutation of the other
"""

# def is_perm(string1, string2):

#     chars1 = sorted([char for char in string1])
#     chars2 = sorted([char for char in string2])

#     if chars1 == chars2:
#         return True

#     return False


# print(is_perm("scar", "cars"))
# print(is_perm("house", "tree"))
# print(is_perm("", " "))
# print(is_perm("", ""))
# print(is_perm("mouses", "mouses"))
# print(is_perm("gorgonzola", "gorg"))
# print(is_perm("aabbccddeeff", "aaccdd"))

# """
# write a method to replace all spaces in a string with
# %20
# """

# def replace_space(input_string):

#     input_string = input_string.replace(' ', '%20')
        
#     return input_string

#     # return ''.join(['%20' for char in string if char == ' ' or char for char in string if char != ' '])
    
# print(replace_space("Hi John"))

"""
given a string, write a function to check if it's a permutation of a 
palindrome. a palindrome is a word of phrase that's the same forwards 
and backwards. a permutation is a rearrangement of letters. the palindrome
does not need to be limited to just dictionary words
"""

# def perm_palindrome(input):
#     char_count = {}
#     odds = []
#     input = input.replace(' ', '')
#     for char in input:
#         if char not in char_count:
#             char_count[char] = 1
#         else:
#             char_count[char] += 1

#     print(char_count)
#     for value in char_count.values():
#         if value % 2 == 1:
#             odds.append(value)

#     if len(odds) > 1:
#         return False
    
#     return True

# print(perm_palindrome('taco cat'))
# print(perm_palindrome('here is a sentence'))
# print(perm_palindrome('false falseyyyyyyyy'))
# print(perm_palindrome('true true'))


"""
there are three types of edits that can be performed on strings:
insert a character, remove a character, or replace a character. 
given two strings, write a function to check if they are one edit 
(or zero edits) away.
"""

# def one_edit(string1, string2):
#     if string1 == string2:
#         return True

#     longer_str = ''
#     shorter_str = ''

#     if len(string1) > len(string2):
#         longer_str = string1
#         shorter_str = string2

#     elif len(string2) > len(string1):
#         longer_str = string2
#         shorter_str = string1

#     # replacing a character in place
#     else:
#         differences = []
#         for i, char in enumerate(string1):
#             if string2[i] != char:
#                 differences.append(char)

#         if len(differences) > 1:
#             return False

#     # adding or removing
#     for i, char in enumerate(shorter_str):
#         if len(longer_str) - len(shorter_str) > 1:
#             return False
#         if longer_str[i] != char:
#             if longer_str[i + 1] != char and longer_str[i - 1] != char:
#                 return False

#     return True


# print(one_edit('apple','apple')) #true
# print(one_edit('apple','arple')) #true
# print(one_edit('apple','arole')) #false
# print(one_edit('cut','cute')) #true
# print(one_edit('furry','furr')) #true
# print(one_edit('house','hour')) #false
# print(one_edit('rise','arise')) #true
# print(one_edit('rise','arisen')) #false
# print(one_edit('whnk','twink')) #false


"""
implement a method to perform basic string compression using the counts of repeated characters.
ex, 'aabccccaaa' -> 'a2b1c4a3'. if the compressed string would not become smaller than the 
original, return the original string. can assume it only has uppercase and lowercase letters.
"""

# def compress_string(string):
#     char_count = []
#     chars = []
#     counter = 1
#     for i, char in enumerate(string):
#         if i == 0:
#             char_count.append(1)
#             chars.append(char)
#         elif string[i - 1] == char:
#             char_count[-1] += 1
#         elif string[i - 1] != char:
#             char_count.append(1)
#             chars.append(char)
    
#     compressed_str = ''

#     for i, char in enumerate(chars):
#         compressed_str += char
#         compressed_str += str(char_count[i])

#     if len(compressed_str) > len(string):
#         return string
    
#     return compressed_str

# print(compress_string('aabbbccccccddaaa'))
# print(compress_string('abcdeeefg'))


"""
given an image represented by an NxN matrix, where each pixel in 
the image is 4 bytes, write a method to rotate the image by 
90 degrees. can you do this in place?
"""



"""
[                       [
    [1, 2, 3]               [3, 6, 9]
    [4, 5, 6]    ---->      [2, 5, 8]
    [7, 8, 9]               [1, 4, 7]
    ]                       ]

    [1, 2, 3, 4]                [4, 8, 12, 16]
    [5, 6, 7, 8]                [3, 7, 11, 15]
    [9, 10, 11, 12] -------->   [2, 6, 10, 14]   
    [13, 14, 15, 16]            [1, 5, 9,  13]
"""

# def rotate_image(matrix):
#     l = len(matrix)
#     rotated_matrix = []
    
    
#     for i in range(0, l):
#         rotated_col = []
#         x = l - 1 - i
#         for i2 in range(0, l):
#             rotated_col.append(matrix[i2][x])
#         rotated_matrix.append(rotated_col)
        
#     return rotated_matrix

# print(rotate_image(res))


"""
write an algorithm such that if an element in an MxN matrix is 0, 
its entire row and column are set to 0
"""


sample = [
    [1, 4, 6],
    [2, 1, 3],
    [8, 9, 1],
    [4, 1, 5]
]

# sample[1][1]

# sample[3][2]

# sample[3][0], sample[3][1], sample[3][2], .... etc for length of sample[3]
# sample[0][2], sample[1][2], sample[2][2], .... etc for length of sample

# def make_zero(matrix):
    
#     m= len(matrix)
#     zeroes = {}      # {1:1, 3:2}
#     for i, row in enumerate(matrix):
#         print(i, 'i')
        
#         for i2, num in enumerate(row):
#             n = len(row)
#             print(i2, 'i2')
#             if num == 0:
#                 zeroes[i] = i2

#     for i in range(0, m):
#         for i2 in range(0, n):
#             if i2 in zeroes.values() or i in zeroes:

#                 matrix[i][i2] = 0

#     return matrix
            





# def zero_matrix(matrix):


#                 make_zero(matrix, i, i2)

#     return matrix

# def make_zero(matrix, i, i2):
#     m = len(matrix)
#     print(m)    
#     for row in matrix:
#         print(row)
#         l = len(row)
#         print(l)
#         for i in range(0, l - 1):
#             matrix[i][l] = 0

#     return matrix


print(make_zero(sample))




# [
#     [1, 4, 6],
#     [2, 0, 3],
#     [8, 9, 1],
#     [4, 1, 0]
# ]


