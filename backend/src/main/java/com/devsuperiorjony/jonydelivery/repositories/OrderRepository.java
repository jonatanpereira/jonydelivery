package com.devsuperiorjony.jonydelivery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperiorjony.jonydelivery.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}