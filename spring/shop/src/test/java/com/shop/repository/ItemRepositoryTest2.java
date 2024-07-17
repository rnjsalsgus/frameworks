//package com.shop.repository;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//import java.time.LocalDateTime;
//import java.util.List;
//
//import org.junit.jupiter.api.DisplayName;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.stereotype.Repository;
//
//import com.shop.constant.ItemSellStatus;
//import com.shop.entity.Item;
//
//@SpringBootTest
//
//class ItemRepositoryTest2 {
//
//	@Autowired
//	ItemRepository itemRepository;
//	
//	public void createItemList() {
//		for(int i=1;i<=10;i++) {
//			Item item=new Item();
//			item.setItemNm("테스트 상품"+i);
//			item.setPrice(10000+i);
//			item.setItemDetail("테스트 상품 상세 설명"+i);
//			item.setItemSellStatus(ItemSellStatus.SELL);
//			item.setStockNumber(100);
//			item.setRegTime(LocalDateTime.now());
//			item.setUpdateTime(LocalDateTime.now());
//			Item savedItem=itemRepository.save(item);
//		}
//	}
//	@Test
//	@DisplayName("가격 LessThan 테스트")
//	void findByPriceLessThanTest() {
//		this.createItemList();
//		List<Item> itemList=itemRepository.findByPriceLessThan(10005);
//		for(Item item:itemList) {
//			System.out.println(item);
//		}
//	}
//	@Test
//	@DisplayName("가격 내림차순 조회 테스트")
//	public void findByPriceLessThanOrderByPriceDescTest() {
//		this.createItemList();
//		List<Item> itemList=itemRepository.findByPriceLessThanOrderByPriceDesc(10005);
//		for(Item item:itemList) {
//			System.out.println(item);
//		}
//	}
//
//}
