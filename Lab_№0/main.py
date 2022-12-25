import json


class Solution:
    def sum_number_in_string(self, number_string: str) -> int:
        rez = 0
        for i in range(len(number_string)):
            rez += int(number_string[i])
        return rez


    def get_leader_string(self, steps: int) -> str:
        rez = ""
        for row in range(steps + 1):
            str = ""
            for i in range(steps - row):
                str += " "
            for i in range(row):
                str += "#"
            rez += str + '\n'
        return rez

    def to_json(self, func):
        def wrapped(*args, **kwargs):
            return json.dumps(func(*args, **kwargs))
        return wrapped

    def get_spiral_number_matrix(self, number):
        pass

if __name__ == '__main__':
    ...
