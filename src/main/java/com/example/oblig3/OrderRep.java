package com.example.oblig3;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class OrderRep {

    @Autowired
    private JdbcTemplate db;

    public void saveAllOrders(Order innOrder){
        String sql ="INSERT INTO Orders (film, antall, fornavn, etternavn, telefonnr, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, innOrder.getFilm(), innOrder.getAntall(), innOrder.getFornavn(), innOrder.getEtternavn(),
                innOrder.getTelefonnr(), innOrder.getEpost());
    }

    public List<Order> getAllOrders(){
        String sql = "SELECT * FROM Orders ORDER BY etternavn";
        List<Order> allOrders = db.query(sql,new BeanPropertyRowMapper<>(Order.class));
        return allOrders;
    }

    public void deleteOrders(){
        String sql ="DELETE FROM Orders";
        db.update(sql);
    }

    @PostConstruct
    public void createTable() {
        db.execute("CREATE TABLE IF NOT EXISTS Orders (id INTEGER AUTO_INCREMENT NOT NULL, film VARCHAR(255) NOT NULL , antall INTEGER NOT NULL, fornavn VARCHAR(255) NOT NULL, etternavn VARCHAR(255) NOT NULL, telefonnr VARCHAR(255) NOT NULL, epost VARCHAR(255) NOT NULL, PRIMARY KEY (id))");
    }
}
