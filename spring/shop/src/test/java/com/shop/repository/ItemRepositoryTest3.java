//package com.shop.repository;
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
//@SpringBootTest
//
//class ItemRepositoryTest3 {
//
//	@Autowired
//	ItemRepository itemRepository;
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
//			itemRepository.save(item);
//		}
//	}
//	@Test
//	@DisplayName("@Query를 이용한 상품 조회 테스트")
//	void test() {
//		this.createItemList();
//		List<Item> itemList=itemRepository.findByItemDetail("테스트 상품 상세 설명");
//		for(Item item:itemList){
//			System.out.println(item);
//		}
//	}
//	
//	@Test
//	@DisplayName("nativeQuery 속성을 이용한 상품 조회 테스트")
//	public void findByItemDetailByNativeTest() {
//		this.createItemList();
//		List<Item> itemList=itemRepository.findByItemDetailByNative();
//		for(Item item:itemList) {
//			System.out.println(item);
//		}
//	}
//}
