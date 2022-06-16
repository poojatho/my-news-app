package in.stackroute.newsrestapi.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class News {
    private String status;
    private int totalResults;
    private Article[] articles;
}
