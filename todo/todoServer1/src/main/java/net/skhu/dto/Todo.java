package net.skhu.dto;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Todo {
    int id;
    String title;
    String description;
    Date due_date;
}
