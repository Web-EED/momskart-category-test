import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import Rating from '../Rating';
import { formatCurrency } from '~/utilities/product-helper';
import ProductActions from '~/components/elements/products/modules/ProductActions';
import useProduct from '~/hooks/useProduct';
import { Box, Divider, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import '../../styles/DealOfDayProduct.scss';
import useEcomerce from '~/hooks/useEcomerce';
import { useSelector } from 'react-redux';
import { notification } from 'antd';

const BestSellerProduct = ({ product }) => {
    const { thumbnailImage, badge, title } = useProduct(product);
    const { price, sale_price, is_sale } = product;
    const { addItem } = useEcomerce();
    const ecomerce = useSelector(({ ecomerce }) => ecomerce);

    const [liked, setLiked] = useState(false);
    const handleLikeToggle = () => {
        setLiked(!liked);
    };
    function handleAddItemToCart(e) {
        e.preventDefault();
        addItem(
            { id: product.product_id_PK, quantity: 1 },
            ecomerce.cartItems,
            'cart'
        );
        notification.open({
            message: 'Cart Updated',
            description: 'This product has been added to your cart',
            duration: 500,
        });
    }
    // const { thumbnailImage, badge, title } = useProduct(product);
    // const { price, sale_price, is_sale } = product;

    // const [liked, setLiked] = useState(false);
    // const handleLikeToggle = () => {
    //     setLiked(!liked);
    // };

    const extendedPrice = useMemo(() => {
        if (is_sale) {
            return (
                <p className="product-price sale">
                    ₹{formatCurrency(price)}
                    <del className="original-price">
                        ₹{formatCurrency(sale_price)}
                    </del>
                    <span className="discount">50% OFF</span>
                </p>
            );
        } else {
            return <p className="product-price">₹{formatCurrency(price)}</p>;
        }
    }, [price, sale_price, is_sale]);

    // logic for 2 liner titles
    const truncateTitle = (title) => {
        if (React.isValidElement(title)) {
            title = title.props.children;
        }

        if (typeof title === 'string') {
            if (title.length > 60) {
                return `${title.slice(0, 60)}...`;
            }
        }
        return title;
    };

    return (
        <div className="product-card">
            <div className="product-thumbnail">
                <Link href={'/product/[pid]'} as={`/product/${product.slug}`}>
                    {thumbnailImage}
                </Link>
                <IconButton onClick={handleLikeToggle} className="like-button">
                    {liked ? (
                        <FavoriteIcon style={{ color: 'red' }} />
                    ) : (
                        <FavoriteBorderIcon />
                    )}
                </IconButton>
            </div>
            <div className="product-details">
                <div className="product-title">{truncateTitle(title)}</div>
                <hr style={{ margin: '10px' }} />
                <div style={{ display: 'flex' }}>
                    <div
                        style={{
                            width: '80%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            textAlign: 'left',
                            paddingLeft: '10px',
                        }}>
                        <Link href={'/shop'} className="product-vendor">
                            By {product.sellername}, {product.cityName}
                        </Link>

                        <div className="product-rating">
                            <Rating rating={product.rating} />
                            <span className="rating-count">
                                {product.ratingCount} / 05
                            </span>
                        </div>

                        <div className="product-price-container">
                            {extendedPrice}
                        </div>
                    </div>
                    <div
                        style={{
                            width: '20%',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                        }}>
                        <div className="trusted-sign">
                            <img
                                src="https://i.ibb.co/rkmn2d1/mkt-trusted-img.png"
                                alt="trusted icon"
                            />
                        </div>
                    </div>
                </div>
                <button
                    className="add-to-cart-button"
                    onClick={(e) => handleAddItemToCart(e)}>
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default BestSellerProduct;
