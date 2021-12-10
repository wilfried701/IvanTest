import React from "react"
import {View, Button, TextInput,StyleSheet,FlatList,Text, ActivityIndicator} from "react-native"
import filmData from "./Helpers/FilmData"
import FilmItem from "./FilmItem"
import {getFilmsFromApiWithSearchedText} from "../API/TMDBApi"

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            films:[],
            isLoading:false
        }
        this.searchedText = ""
    }

    _loadFilms(){
        this.setState({isLoading:true})
        if(this.searchedText.length > 0){
            getFilmsFromApiWithSearchedText(this.searchedText).then(data => 
                this.setState({ 
                    films: data.results,
                    isLoading:false
                })
            )
        }
    }

    _displayLoading(){
        if(this.state.isLoading){
            return(
                <View style = {styles.loading_container}>
                    <ActivityIndicator size = 'large' />
                </View>
            )
        }
    }
    _searchTextInputChanged(text){
        this.searchedText = text
    }
    render(){
        console.log(this.state.isLoading);
        return(
            <View style={styles.main_container}>
                <Text style={styles.title_text}>Tous Vos Films disponible ici</Text>
                <TextInput onSubmitEditing = {() => this._loadFilms()} onChangeText={(text) => this._searchTextInputChanged(text)} placeholder="Titre du film" style={styles.textinput} />
                <Button style ={styles.button} title ="Rechercher" onPress={()=>this._loadFilms()}/>
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item}/>}
                    onEndReachedThreshold = {0.5}
                    onEndReached={() =>{
                        console.log("onEndReached")
                    }
                    }
                />
                {this._displayLoading()}
            </View>
        )
    }
}




const styles = StyleSheet.create({
    main_container:{
        flex:1,
        marginTop:30
    },
    title_text:{
        fontSize:30,
        textAlign:"center"
    },
    textinput:{
        height:50,
        borderWidth:1,
        padding: 10,
        margin:20,
        marginBottom:10,
        borderRadius:10,
        borderColor:"#8b9297"
    },
    loading_container:{
        position:"absolute",
        left:0,
        right:0,
        top:100,
        bottom:0,
        alignItems:"center",
        justifyContent:"center"
    }
    
})

export default Search