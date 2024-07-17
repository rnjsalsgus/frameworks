//package com.shop.repository;
//
//import java.util.List;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
//import org.springframework.stereotype.Repository;
//
//import com.shop.entity.Item;
//
//// JpaRepository를 상속받는 ItemRepository를 작성
///* JpaRepository는 2개의 제네릭 타입을 사용하는데 첫 번째에는 엔티티 타입 클래스
// 두 번째는 기본키의 타입을 넣어주면 된다. */
//// JpaRepository는 기본적은 CRUD 및 페이징 처리를 위한 메소드가 정의되어 있다.
//
//public interface ItemRepository extends JpaRepository<Item, Long>{
//	/*
//	 * JpaRepository에서 지원하는 메소드 예시 
//	 * 메소드 / 기능
//	 * save() / 엔티티 저장 및 수정
//	 * delete() / 엔티티 삭제
//	 * count() / 엔티티 총 개수 반환
//	 * findAll() / 모든 엔티티 조회
//	 */
//	
//	/*	
//	   Repository 인터페이스에 간단한 네이밍 룰을 이용하여 메소드를 작성하면
//	    원하는 쿼리를 실행할 수 있다.
//	   데이터를 조회하는 메소드를 이용할 때 가장 많이 사용하는 문법으로 find를 사용
//	   find+(엔티티이름)+By+(변수이름)
//	*/	
//	// 상품의 이름을 이용하여 데이터를 조회하는 예제
//	// 엔티티명은 생략 가능
//	// 매개변수로 검색할 때 사용할 상품명 변수를 넘겨준다.
//	List<Item> findByItemNm(String itemNm);
//	
//	// 상품을 상품명과 상품 상세 설명을 OR조건을 이용하여 조회하는 쿼리 메소드
//	
//	List<Item> findByItemNmOrItemDetail(String itemNm,String itemDetail);
//	
//	// 파라미터로 넘어온 price변수보다 값이 작은 상품 데이터를 조회하는 쿼리 메소드
//	// JPQL snippet
//	// LessThan - where x < ?
//	List <Item> findByPriceLessThan(int price);
//	
//	// 출력결과를 OrderBy키워드를 이용한다면 오름차순 또는 내림차순으로 정렬할 수 있다.
//	// 오름차순: OrderBy+속성명+Asc
//	// 내림차순: OrderBy+속성명+Desc
//	// 상품의 가격이 높은 순으로 조회하는 쿼리 메소드
//	List<Item> findByPriceLessThanOrderByPriceDesc(int price);
//	
//	// @Query 어노테이션
//	// Sql과 유사한 JPQL(Java Persistence Query Language)
//	// JPQL은 엔티티 객체를 대상으로 쿼리를 수행한다.
//	// 테이블이 아닌 객체를 대상으로 검색하는 객체지향 쿼리
//	// 특정 데이터베이스를 의존하지 않는다.
//	// JPQL로 작성을 했다면 데이터베이스가 변경되어도 애플리케이션이 영향을 받지 않는다.
//	
//	// @Query어노테이션을 이용하여 상품 데이터를 조회
//	// 상품 상세 설명을 파라미터로 받아 해당 내용을 상품 상세 설명에 포함하고 있는
//	// 데이터를 조회하며, 정렬 순서는 가격이 높은 순으로 조회
//	
//	/* from 뒤에는 엔티티 클래스로 작성한 Item을 지정해 주었고,
//	 Item으로부터 데이터를 select하겠다는 것을 의미한다. */
//	@Query("select i from Item i where i.itemDetail like %:itemDetail% ordey by i.price desc")
//	/* 파라미터에 @Param 어노테이션을 이용하여 파라미터로 넘어온 값을 JPQL에 들어갈
//	 변수로 지정해 줄 수 있다.
//	 현재는 itemDetail변수를 "like % %"사이에 ":itemDetail"로 값이 들어가도록 작성 */
//	List<Item> findByItemDetail(@Param("itemDetail") String i);
//	/* @Param 어노테이션을 이용하여 변수를 JPQL에 전달하는 대신 파라미터의 순서를
//	이용해 전달해 줄 수도 있다. */
//	
//	/* 기존의 데이터베이스에서 사용하던 쿼리를 그대로 사용해야 할 때는 
//	 @Query의 nativeQuery 속성을 사용하면 기존의 쿼리를 그대로 활용할 수 있다. */
//	@Query(value="select * from item i where i.item_detail like '상세' order by i.price desc",nativeQuery=true)
//	List<Item> findByItemDetailByNative();
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//}
