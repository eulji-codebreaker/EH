#https://school.programmers.co.kr/learn/courses/30/lessons/76502
#다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.
#(), [], {} 는 모두 올바른 괄호 문자열입니다.
#만약 A가 올바른 괄호 문자열이라면, (A), [A], {A} 도 올바른 괄호 문자열입니다.
#예를 들어, [] 가 올바른 괄호 문자열이므로, ([]) 도 올바른 괄호 문자열입니다.
#만약 A, B가 올바른 괄호 문자열이라면, AB 도 올바른 괄호 문자열입니다.
# 예를 들어, {} 와 ([]) 가 올바른 괄호 문자열이므로, {}([]) 도 올바른 괄호 문자열입니다.
#대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다.
# 이 s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전시켰을 때 s가 올바른 괄호 문자열이 되게 하는 x의 개수를
# return 하도록 solution 함수를 완성해주세요.

def solution(x, l):
    answer = 0
    for i in range(l):
        rotated = x[i:] + x[:i]
        if check(rotated):
            answer += 1
    return answer

def check(s):
    stack = []
    pair = {')': '(', ']': '[', '}': '{'}

    for ch in s:
        if ch in "([{":
            stack.append(ch)
        else:  # ) ] }
            if not stack or stack[-1] != pair.get(ch):
                return False
            stack.pop()

    return len(stack) == 0

def q():
    x = input('문자를 입력하시오: ')
    l = len(x)
    return x, l

while True:
    x, l = q()
    if 0 < l <= 1000:
        break
    print("길이는 1~1000 사이여야 합니다. 다시 입력하세요.")
print(solution(x, l))