import Footer from "../component/footer";
import Header from "../component/header";

const Cart = {
    render() {
        return /* html */ `
        ${Header.render()}
            <section class="cart">
                <h1>Shopping Cart</h1>
            
                <div class="container-cart">
            
                    <div class="list_product">
                        <div class="product_cart">
                            <span class="del"><i class="fas fa-times" ></i></span>
                            <div class="image">
                                <img src="../image/book-6.png" alt="" width="150">
                            </div>
                    
                            <div class="info-product">
                                <div>
                                    <p class="name">Product name</p>
                                    <p class="price">$32.00</p>
                                </div>
                    
                                <form action="">
                                    <input type="number" name="" id="" min="1" max="100" value="1">
                                </form>
                                <p> In Stoke</p>
                            </div>
                        </div>

                        <div class="product_cart">
                            <span class="del"><i class="fas fa-times" ></i></span>
                            <div class="image">
                                <img src="../image/book-6.png" alt="" width="150">
                            </div>
                    
                            <div class="info-product">
                                <div>
                                    <p class="name">Product name</p>
                                    <p class="price">$32.00</p>
                                </div>
                    
                                <form action="">
                                    <input type="number" name="" id="" min="1" max="100" value="1">
                                </form>
                                <p> In Stoke</p>
                            </div>
                        </div>

                        <div class="product_cart">
                            <span class="del"><i class="fas fa-times" ></i></span>
                            <div class="image">
                                <img src="../image/book-6.png" alt="" width="150">
                            </div>
                    
                            <div class="info-product">
                                <div>
                                    <p class="name">Product name</p>
                                    <p class="price">$32.00</p>
                                </div>
                    
                                <form action="">
                                    <input type="number" name="" id="" min="1" max="100" value="1">
                                </form>
                                <p> In Stoke</p>
                            </div>
                        </div>
                        

                    </div>

                    <div class="order">
                    <h2>Order summary</h2>

                        <div class=" don_hang">
                        
                            <div>
                            
                                <div class="dl_don_hang" >
                                    <p>Tạm tính</p>
                                    <p>$<?= $tong ?>.00</p>

                                </div>

                                <div class="dl_don_hang">
                                    <p>Phí vận chuyển</p>
                                    <p>$<span id="phi_vc"></span>.00</p>

                                </div>
                                <div class="dl_don_hang">
                                    <p>Tổng</p>
                                    <input id="tong2" type="text" value="<?= $tong ?>" style="display: none;">

                                    <p>$<span id="tongDonHang"></span>.00</p>

                                </div>
                                <div class="flex justify-between py-2">
                                    <p class="font-bold">Trả tiền mặt khi nhận hàng</p>

                                </div>
                                <div class=" py-2">
                                    <button type="submit" class="btn_thanh_toan" name="thanh_toan">Thanh toán</button>


                                </div>
                            </div>

                        </div>

                    </div>
                   
                   
            
                </div>
            
            </section>
            ${Footer.render()}
        `;
    },
};

export default Cart;