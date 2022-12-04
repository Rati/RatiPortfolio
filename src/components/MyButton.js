import { StyleSheet, Text, Pressable } from "react-native";

export default function MyButton() { 


  return (
    <Pressable style={styles.buttonStyle}>
      <Text style={styles.textStyle}>Click Button</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#8181B1',
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#fff',
  },
})