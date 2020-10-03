import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '80%',
    height: 150,
    backgroundColor: '#581845',
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  desc: {
    color: 'white',
    marginStart: 10,
    fontSize: 18,
  },
  leftSection: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 120,
    marginRight: 10,
    resizeMode: 'contain',
  },
  starContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  backgroundGrey: {
    backgroundColor: 'grey',
  },
});
