fn merge_sort(arr: &mut [i32]) {
    fn swap_arr(arr: &mut [i32], i: usize, j: usize) {
        if arr[i] > arr[j] {
            let helper = arr[i];
            arr[i] = arr[j];
            arr[j] = helper;
        }
    }
    fn calc_middle(middle: usize, end: usize) -> usize {
        return match middle < end {
            true => middle + 1,
            false => middle
        };
    }
    fn _merge_sort(arr: &mut [i32], start: usize, end: usize) {
        let size = end - start;
        let middle = start + (size / 2);
        match size {
            1 => {
                swap_arr(arr, start, end);
            }
            0 => {}
            _ => {
                _merge_sort(arr, start, middle);
                _merge_sort(arr, calc_middle(middle, end), end);
                merge(arr, start, middle, end)
            }
        }
    }
    fn evaluate_index(index: &mut usize, max: usize, flag: &mut bool) {
        *index = match (*index) < max {
            true => (*index) + 1,
            false => {
                *flag = true;
                max
            }
        };
    }
    fn merge(arr: &mut [i32], start: usize, middle: usize, end: usize) {
        let mut tmp_arr: Vec<i32> = Vec::new();
        let mut left_empty = false;
        let mut right_empty = false;
        let mut left_iterator = start;
        let mut right_iterator = calc_middle(middle, end);

        while !left_empty || !right_empty {
            let both_sides_are_not_empty = !left_empty && !right_empty;
            if both_sides_are_not_empty {
                if arr[left_iterator] < arr[right_iterator] {
                    tmp_arr.push(arr[left_iterator]);
                    evaluate_index(&mut left_iterator, middle, &mut left_empty);
                } else if arr[left_iterator] > arr[right_iterator] {
                    tmp_arr.push(arr[right_iterator]);
                    evaluate_index(&mut right_iterator, end, &mut right_empty);
                } else if arr[left_iterator] == arr[right_iterator] {
                    tmp_arr.push(arr[left_iterator]);
                    tmp_arr.push(arr[right_iterator]);
                    evaluate_index(&mut left_iterator, middle, &mut left_empty);
                    evaluate_index(&mut right_iterator, end, &mut right_empty);
                }
            } else if left_empty {
                tmp_arr.push(arr[right_iterator]);
                evaluate_index(&mut right_iterator, end, &mut right_empty);
            } else if right_empty {
                tmp_arr.push(arr[left_iterator]);
                evaluate_index(&mut left_iterator, middle, &mut left_empty);
            }
        }
        left_iterator = start;
        for x in tmp_arr {
            arr[left_iterator] = x;
            left_iterator += 1;
        }
    }
    _merge_sort(arr, 0, arr.len() - 1);
}

fn main() {
    let mut an_array = [1, 34, 5, 2, 1,4,45];
    merge_sort(&mut an_array);
    an_array.iter().for_each(|x| print!("{}, ", x));
    println!();
}
