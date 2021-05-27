package net.skhu.controller;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import net.skhu.dto.Todo;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class Todo1Controller {

    static List<Todo> list = new ArrayList<>();
    static int id = 2;

    static {
        list.add(new Todo(1, "과제", "과제 제출", Date.valueOf("2021-05-30")));
        list.add(new Todo(2, "시험공부", "기말고사 시험공부", Date.valueOf("2021-06-15")));
    }

    @GetMapping("todo1/list")
    public List<Todo> list() {
        return list;
    }

    @PostMapping("todo1/add")
    public String add(@RequestBody Todo todo) {
        todo.setId(++id);
        list.add(todo);
        return "success";
    }

    @PostMapping("todo1/save")
    public String save(@RequestBody Todo todo) {
        if (todo.getId() == 0) {
            todo.setId(++id);
            list.add(todo);
        } else {
            int index = indexOf(todo.getId());
            list.set(index, todo);
        }
        return "success";
    }

    @DeleteMapping("todo1/delete")
    public String delete(int id) {
        int index = indexOf(id);
        if (index >= 0) list.remove(index);
        return "success";
    }

    private int indexOf(int id) {
        for (int i = 0; i < list.size(); ++i)
            if (list.get(i).getId() == id)
                return i;
        return -1;
    }
}
