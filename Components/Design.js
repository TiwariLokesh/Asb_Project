// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, Dimensions, Button, TouchableOpacity, Image } from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// const { width } = Dimensions.get('window');

// const Design = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.headerContainer}>
    
//         <Text style={styles.title}>HODLINFO</Text>

//         {/* Centered Dropdown */}
//         <View style={styles.dropdown}>
//           <FontAwesome name="angle-down" size={20} color="#fff" />
//           <Text style={styles.dropdownText}>INR</Text>
//         </View>
//         <View style={styles.dropdown}>
//           <FontAwesome name="angle-down" size={20} color="#fff" />
//           <Text style={styles.dropdownText}>BTC</Text>
//         </View>
//         <View style={styles.dropdown}>
//           <Text style={styles.dropdownText}>BUY BTC</Text>
//         </View>

        
//         <TouchableOpacity style={styles.telegramButton}>
//           <Image
//             source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Telegram_Messenger.png' }}
//             style={styles.telegramLogo}
//           />
//           <Text style={styles.telegramButtonText}>Telegram</Text>
//         </TouchableOpacity>
//       </View>
//       <Text style={styles.subTextCenter}>Best Price to Trade</Text>
//       <View style={styles.header}>
//         <View style={styles.percentageContainer}>
//           <Text style={styles.percentageText}>0.1 %</Text>
//           <Text style={styles.subText}>5 Mins</Text>
//         </View>
//         <View style={styles.percentageContainer}>
//           <Text style={styles.percentageText}>0.96 %</Text>
//           <Text style={styles.subText}>1 Hour</Text>
//         </View>
//         <View style={styles.percentageContainer}>
//         <Text style={styles.bestPrice}>₹ 26,56,110</Text>
//         </View>
//         <View style={styles.percentageContainer}>
//           <Text style={styles.percentageText}>2.73 %</Text>
//           <Text style={styles.subText}>1 Day</Text>
//         </View>
//         <View style={styles.percentageContainer}>
//           <Text style={styles.percentageText}>7.51 %</Text>
//           <Text style={styles.subText}>7 Days</Text>
//         </View>
//       </View>

      
//       <Text style={styles.subTextCenter}>Average BTC/INR net price including commission</Text>

//       <ScrollView style={styles.tableContainer} horizontal={false}>
//         <View style={styles.table}>
    
//           <View style={styles.tableHeader}>
//             <Text style={[styles.tableHeaderText, styles.tableIndex]}>#</Text>
//             <Text style={[styles.tableHeaderText, styles.tablePlatform]}>Platform</Text>
//             <Text style={[styles.tableHeaderText, styles.tablePrice]}>Last Traded Price</Text>
//             <Text style={[styles.tableHeaderText, styles.tableBuySell]}>Buy / Sell Price</Text>
//             <Text style={[styles.tableHeaderText, styles.tableDifference]}>Difference</Text>
//             <Text style={[styles.tableHeaderText, styles.tableSavings]}>Savings</Text>
//           </View>

     
//           <View style={styles.tableRow}>
//             <Text style={[styles.tableRowText, styles.tableIndex]}>1</Text>
//             <View style={styles.tablePlatform}>
//             <Image
//             source={{ uri: 'https://wazirx.com/static/media/wazirx-logo-rounded.9bff9f42.png' }}
//             style={styles.Logo}
//           />
//               <Text style={styles.tableRowText}> WazirX</Text>
//             </View>
//             <Text style={[styles.tableRowText, styles.tablePrice]}>₹ 25,72,612</Text>
//             <Text style={[styles.tableRowText, styles.tableBuySell]}>₹ 25,72,610 / ₹ 25,72,612</Text>
//             <Text style={[styles.tableRowTextRed, styles.tableDifference]}>-3.14 %</Text>
//             <Text style={[styles.tableRowTextRed, styles.tableSavings]}>▼ ₹ 83,498</Text>
//           </View>

          
//           <View style={styles.tableRow}>
//             <Text style={[styles.tableRowText, styles.tableIndex]}>2</Text>
//             <View style={styles.tablePlatform}>
//             <Image
//             source={{ uri: 'https://avatars.githubusercontent.com/u/42836088?s=280&v=4' }}
//             style={styles.Logo}
//           />
//               <Text style={styles.tableRowText}>Bitbns</Text>
//             </View>
//             <Text style={[styles.tableRowText, styles.tablePrice]}>₹ 28,83,906</Text>
//             <Text style={[styles.tableRowText, styles.tableBuySell]}>₹ 28,55,164 / ₹ 28,82,157</Text>
//             <Text style={[styles.tableRowTextRed, styles.tableDifference,styles.unique]}>8.58 %</Text>
//             <Text style={[styles.tableRowTextRed, styles.tableSavings, styles.unique]}>▲ ₹ 2,27,796</Text>
//           </View>

 
//           <View style={styles.tableRow}>
//             <Text style={[styles.tableRowText, styles.tableIndex]}>3</Text>
//             <View style={styles.tablePlatform}>
//             <Image
//             source={{ uri: 'https://pbs.twimg.com/profile_images/1214148137083752449/16vRWQj2_400x400.jpg' }}
//             style={styles.Logo}
//           />
//               <Text style={styles.tableRowText}>Colodax</Text>
//             </View>
//             <Text style={[styles.tableRowText, styles.tablePrice]}>₹ 26,00,000</Text>
//             <Text style={[styles.tableRowText, styles.tableBuySell]}>₹ 25,98,000 / ₹ 26,00,000</Text>
//             <Text style={[styles.tableRowTextRed, styles.tableDifference]}>-1.50 %</Text>
//             <Text style={[styles.tableRowTextRed, styles.tableSavings]}>▼ ₹ 50,000</Text>
//           </View>

       
//           <View style={styles.tableRow}>
//             <Text style={[styles.tableRowText, styles.tableIndex]}>4</Text>
//             <View style={styles.tablePlatform}>
//             <Image
//             source={{ uri: 'https://i.pinimg.com/originals/86/81/9a/86819adef0b70d6c02801b8fff344983.png' }}
//             style={styles.Logo}
//           />
//               <Text style={styles.tableRowText}>Zebpay</Text>
//             </View>
//             <Text style={[styles.tableRowText, styles.tablePrice]}>₹ 26,10,000</Text>
//             <Text style={[styles.tableRowText, styles.tableBuySell]}>₹ 26,08,000 / ₹ 26,10,000</Text>
//             <Text style={[styles.tableRowTextRed, styles.tableDifference]}>-0.76 %</Text>
//             <Text style={[styles.tableRowTextRed, styles.tableSavings]}>▼ ₹ 30,000</Text>
//           </View>
//         </View>
//       </ScrollView>

//       <View style={styles.buttonContainer}>
//        <TouchableOpacity style={styles.lastBtn}><Text style={{color:'#00FFC6'}}> Add holdlinfo to home screen</Text></TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1F1F1F',
//     padding: 10,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 20,
//     color: '#00FFC6',
//     fontWeight: 'bold',
//   },
//   dropdown: {
//     backgroundColor: '#292929',
//     borderRadius: 5,
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   dropdownText: {
//     color: '#FFFFFF',
//     fontSize: 14,
//   },
//   telegramButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#00FFC6',
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
//   telegramLogo: {
//     width: 16,
//     height: 16,
//     marginRight: 5,
//   },
//   Logo:{
// width:25,
// height:25
//   },
//   telegramButtonText: {
//     color: '#FFFFFF',
//     fontSize: 14,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 10,
//   },
//   percentageContainer: {
//     alignItems: 'center',
//   },
//   percentageText: {
//     fontSize: 16,
//     color: '#00FFC6',
//     fontWeight: 'bold',
//   },
//   unique:{
//     color: '#00FFC6',
//   },
//   subText: {
//     color: '#7C7C7C',
//     fontSize: 10,
//   },
//   subTextCenter: {
//     color: '#7C7C7C',
//     fontSize: 10,
//     textAlign: 'center',
//     marginBottom: 10,
//     marginTop:10
//   },
//   bestPrice: {
//     fontSize: 28,
//     color: '#FFFFFF',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   tableContainer: {
//     marginBottom: 10,
//   },
//   table: {
//     borderRadius: 5,
//     overflow: 'hidden',
//     gap:20
//   },
//   tableHeader: {
//     flexDirection: 'row',
    
//     paddingVertical: 10,
//     paddingHorizontal: 5,
//   },
//   tableHeaderText: {
//     color: '#FFFFFF',
//     fontSize: 14,
//     flex: 1,
//     textAlign: 'center',
//   },
//   tableRow: {
//     flexDirection: 'row',
//     paddingVertical: 10,
//     paddingHorizontal: 5,
//     borderBottomWidth: 1,
//     borderBottomColor: '#2B2B2B',
//     alignItems: 'center',
//     backgroundColor: '#2B2B2B',
// paddingVertical:35
//   },
//   tableRowText: {
//     color: '#FFFFFF',
//     fontSize: 12,
//     flex: 1,
//     textAlign: 'center',
//   },
//   tableRowTextRed: {
//     color: '#FF3C3C',
//   },
//   tableIndex: {
//     flex: 0.5,
//   },
//   tablePlatform: {
//     flex: 2,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   tablePrice: {
//     flex: 2,
//   },
//   tableBuySell: {
//     flex: 3,
//   },
//   tableDifference: {
//     flex: 1.5,
//   },
//   tableSavings: {
//     flex: 1.5,
//   },
//   buttonContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   lastBtn:{
//     paddingVertical:10,
//     paddingHorizontal:20,
//     borderWidth:1,
//     borderColor:'#00FFC6',
//     marginBottom:50
//   }
// });

// export default Design;




import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Button, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const Design = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
    
        <Text style={styles.title}>HODLINFO</Text>

        {/* Centered Dropdown */}
        <View style={styles.dropdown}>
          <FontAwesome name="angle-down" size={20} color="#fff" />
          <Text style={styles.dropdownText}>INR</Text>
        </View>
        

        
        <TouchableOpacity style={styles.telegramButton}>
          <FontAwesome name="telegram" size={20} color="#fff"/>
          <Text style={styles.telegramButtonText}> Telegram</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subTextCenter}>Best Price to Trade</Text>
      <View style={styles.header}>
        <View style={styles.percentageContainer}>
          <Text style={styles.percentageText}>0.1 %</Text>
          <Text style={styles.subText}>5 Mins</Text>
        </View>
        <View style={styles.percentageContainer}>
          <Text style={styles.percentageText}>0.96 %</Text>
          <Text style={styles.subText}>1 Hour</Text>
        </View>
        <View style={styles.percentageContainer}>
          <Text style={styles.percentageText}>2.73 %</Text>
          <Text style={styles.subText}>1 Day</Text>
        </View>
        <View style={styles.percentageContainer}>
          <Text style={styles.percentageText}>7.51 %</Text>
          <Text style={styles.subText}>7 Days</Text>
        </View>
      </View>

      <Text style={styles.bestPrice}>₹ 26,56,110</Text>
      <Text style={styles.subTextCenter}>Average BTC/INR net price including commission</Text>

      <ScrollView style={styles.tableContainer} horizontal={false}>
        <View style={styles.table}>
    
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderText, styles.tableIndex]}>#</Text>
            <Text style={[styles.tableHeaderText, styles.tablePlatform]}>Platform</Text>
            <Text style={[styles.tableHeaderText, styles.tablePrice]}>Last Traded Price</Text>
            <Text style={[styles.tableHeaderText, styles.tableBuySell]}>Buy / Sell Price</Text>
            <Text style={[styles.tableHeaderText, styles.tableDifference]}>Difference</Text>
            <Text style={[styles.tableHeaderText, styles.tableSavings]}>Savings</Text>
          </View>

     
          <View style={styles.tableRow}>
            <Text style={[styles.tableRowText, styles.tableIndex]}>1</Text>
            <View style={styles.tablePlatform}>
            <Image
            source={{ uri: 'https://wazirx.com/static/media/wazirx-logo-rounded.9bff9f42.png' }}
            style={styles.Logo}
          />
              <Text style={styles.tableRowText}> WazirX</Text>
            </View>
            <Text style={[styles.tableRowText, styles.tablePrice]}>₹ 25,72,612</Text>
            <Text style={[styles.tableRowText, styles.tableBuySell]}>₹ 25,72,610 / ₹ 25,72,612</Text>
            <Text style={[styles.tableRowTextRed, styles.tableDifference]}>-3.14 %</Text>
            <Text style={[styles.tableRowTextRed, styles.tableSavings]}>▼ ₹ 83,498</Text>
          </View>

          
          <View style={styles.tableRow}>
            <Text style={[styles.tableRowText, styles.tableIndex]}>2</Text>
            <View style={styles.tablePlatform}>
            <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjkwYFJfAsTaD9UosL5LcisK8vcILQ2Ajrzg&s ' }}
            style={styles.Logo}
          />
              <Text style={styles.tableRowText}>Bitbns</Text>
            </View>
            <Text style={[styles.tableRowText, styles.tablePrice]}>₹ 28,83,906</Text>
            <Text style={[styles.tableRowText, styles.tableBuySell]}>₹ 28,55,164 / ₹ 28,82,157</Text>
            <Text style={[styles.tableRowTextRed, styles.tableDifference,styles.unique]}>8.58 %</Text>
            <Text style={[styles.tableRowTextRed, styles.tableSavings, styles.unique]}>▲ ₹ 200,796</Text>
          </View>

 
          <View style={styles.tableRow}>
            <Text style={[styles.tableRowText, styles.tableIndex]}>3</Text>
            <View style={styles.tablePlatform}>
            <Image
            source={{ uri: 'https://s2.coinmarketcap.com/static/img/coins/200x200/17215.png' }}
            style={styles.Logo}
          />
              <Text style={styles.tableRowText}>Colodax</Text>
            </View>
            <Text style={[styles.tableRowText, styles.tablePrice]}>₹ 26,00,000</Text>
            <Text style={[styles.tableRowText, styles.tableBuySell]}>₹ 25,98,000 / ₹ 26,00,000</Text>
            <Text style={[styles.tableRowTextRed, styles.tableDifference]}>-5.00 %</Text>
            <Text style={[styles.tableRowTextRed, styles.tableSavings]}>▼ ₹ 15,000</Text>
          </View>

       
          <View style={styles.tableRow}>
            <Text style={[styles.tableRowText, styles.tableIndex]}>4</Text>
            <View style={styles.tablePlatform}>
            <Image
            source={{ uri: 'https://i.pinimg.com/originals/86/81/9a/86819adef0b70d6c02801b8fff344983.png' }}
            style={styles.Logo}
          />
              <Text style={styles.tableRowText}>Zebpay</Text>
            </View>
            <Text style={[styles.tableRowText, styles.tablePrice]}>₹ 26,10,000</Text>
            <Text style={[styles.tableRowText, styles.tableBuySell]}>₹ 26,00,000 / ₹ 26,10,000</Text>
            <Text style={[styles.tableRowTextRed, styles.tableDifference]}>-0.76 %</Text>
            <Text style={[styles.tableRowTextRed, styles.tableSavings]}>▼ ₹ 20,000</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
       <TouchableOpacity style={styles.lastBtn}><Text style={{color:'#00FFC6'}}> Add holdlinfo to home screen</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: '#00FFC6',
    fontWeight: 'bold',
  },
  dropdown: {
    backgroundColor: '#292929',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  telegramButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00FFC6',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  telegramLogo: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  Logo:{
width:25,
height:25
  },
  telegramButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  percentageContainer: {
    alignItems: 'center',
  },
  percentageText: {
    fontSize: 16,
    color: '#00FFC6',
    fontWeight: 'bold',
  },
  unique:{
    color: '#00FFC6',
  },
  subText: {
    color: '#7C7C7C',
    fontSize: 10,
  },
  subTextCenter: {
    color: '#7C7C7C',
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 10,
    marginTop:10
  },
  bestPrice: {
    fontSize: 28,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tableContainer: {
    marginBottom: 10,
  },
  table: {
    borderRadius: 5,
    overflow: 'hidden',
    gap:20
  },
  tableHeader: {
    flexDirection: 'row',
    
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  tableHeaderText: {
    color: '#FFFFFF',
    fontSize: 14,
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#2B2B2B',
    alignItems: 'center',
    backgroundColor: '#2B2B2B',
paddingVertical:20
  },
  tableRowText: {
    color: '#FFFFFF',
    fontSize: 12,
    flex: 1,
    textAlign: 'center',
  },
  tableRowTextRed: {
    color: '#FF3C3C',
  },
  tableIndex: {
    flex: 0.5,
  },
  tablePlatform: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tablePrice: {
    flex: 2,
  },
  tableBuySell: {
    flex: 3,
  },
  tableDifference: {
    flex: 1.5,
  },
  tableSavings: {
    flex: 1.5,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  lastBtn:{
    paddingVertical:15,
    paddingHorizontal:15,
    borderWidth:1,
    borderColor:'#00FFC6',
    marginBottom:160
  }
});

export default Design;








