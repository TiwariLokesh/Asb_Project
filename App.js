import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const items = [
  {
    id: '1',
    name: 'Echo Vibe Urban Runners',
    cost: '$179',
    imgSrc: 'https://m.media-amazon.com/images/I/614aiM56siL._SL1500_.jpg'
  },
  {
    id: '2',
    name: 'Swift Glide Sprinter Soles',
    cost: '$199',
    imgSrc: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
  },
  {
    id: '3',
    name: 'Sky Burst Skyline Burst Shoes',
    cost: '$149',
    imgSrc: 'https://cdn.thewirecutter.com/wp-content/media/2024/05/runningshoesforyou-2048px-2251.jpg?auto=webp&quality=75&width=1024', 
  },
  {
    id: '4',
    name: 'Zen Dash Active Flex Shoes',
    cost: '$299',
    imgSrc: 'https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg', 
  },
];

const Assignment = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.subtotal}>
        Subtotal <Text style={styles.totalAmount}>$3,599</Text>
      </Text>
      <Text style={styles.notice}>
        <Image source={{ uri: 'https://png.pngtree.com/png-vector/20220520/ourmid/pngtree-red-check-mark-icon-illustration-checkbox-check-mark-vector-png-image_46455572.jpg' }}
                style={styles.checkIcon}/>
        Your Order is Eligible For Free Delivery
      </Text>

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.imageWrapper}>
              <Image source={{ uri: item.imgSrc }} style={styles.productImage} />
              <TouchableOpacity style={styles.favoriteButton}>
                <Image
                  source={{ uri: 'https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-red-heart-icon-isolated-png-image_1726594.jpg' }}
                  style={styles.heartIcon}/>
              </TouchableOpacity>
            </View>
            <View style={styles.details}>
              <Text style={styles.productName}>{item.name}</Text>
              <View style={styles.priceDetails}>
                <Text style={styles.productCost}>{item.cost}</Text>
                <Text style={styles.deliveryInfo}>Free Shipping</Text>
              </View>
              <View style={styles.quantityControls}>
              <View style={styles.iconBox}>
                <Image
                  source={require('./assests/minus.png')}
                  style={styles.controlIcon} />
                  </View>
                <Text style={styles.quantity}>14</Text>
                <TouchableOpacity>
                <View style={styles.iconBox}>
                  <Image
                  source={require('./assests/plus.png')}
                    style={styles.controlIcon} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.removeButton}>
                  <Image
                    source={{ uri: 'https://www.iconpacks.net/icons/1/free-trash-icon-347-thumb.png' }}
                    style={styles.trashIcon} />
                  <Text style={styles.removeLabel}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Proceed to Buy (8 items)</Text>
      </TouchableOpacity>

      <View style={styles.footerIcons}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' }}
               style={styles.footerIcon} />
        <Image source={{ uri: 'https://icons.veryicon.com/png/o/miscellaneous/loocolor-1/my-wish-list.png' }}
               style={styles.footerIcon} />
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/256/25/25619.png' }}
               style={styles.footerIcon} />
        <Image source={{ uri: 'https://e7.pngegg.com/pngimages/599/165/png-clipart-project-management-task-computer-icons-others-text-logo.png' }}
               style={styles.footerIcon} />
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png' }}
               style={styles.footerIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
  },
  subtotal: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
    color:'black'
  },
  totalAmount: {
    color: '#FF5733',
  },
  notice: {
    color: '#FF5733',
    fontWeight: '700',
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkIcon: {
    width: 22,
    height: 22,
    marginRight: 8,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 18,
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 8,
  },
  imageWrapper: {
    position: 'relative',
  },
  productImage: {
    width: 110,
    height: 90,
    borderRadius: 8,
  },
  favoriteButton: {
    position: 'absolute',
    top: 6,
    left: 6,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 4,
  },
  heartIcon: {
    width: 22,
    height: 22,
  },
  details: {
    marginLeft: 12,
    flex: 1,
  },
  productName: {
    fontSize: 17,
    fontWeight: '700',
    color:'black'
  },
  priceDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  productCost: {
    fontSize: 17,
    fontWeight: '700',
    marginRight: 12,
    color:'black'
  },
  deliveryInfo: {
    color: '#FF5733',
    fontWeight: '700',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  iconBox:{
paddingVertical:2,
backgroundColor: '#cccccc',
borderRadius:5
  },
  controlIcon: {
    width: 22,
    height: 22,
   
    padding: 10,
    marginHorizontal: 8,
    resizeMode:'contain'
  },
  quantity: {
    fontSize: 17,
    marginHorizontal: 8,
  },
  removeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  trashIcon: {
    width: 22,
    height: 22,
  },
  removeLabel: {
    marginLeft: 6,
    color: '#FF5733',
    fontWeight: '700',
  },
  checkoutButton: {
    backgroundColor: '#333333',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 12,
  },
  checkoutText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 18,
  },
  footerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 18,
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
  
  footerIcon: {
    width: 32,
    height: 32,
  },
});

export default Assignment;
