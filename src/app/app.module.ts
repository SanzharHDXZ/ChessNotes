import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatSliderModule } from "@angular/material/slider";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ChessBoardComponent } from "./modules/chess-board/chess-board.component";
import { ComputerModeComponent } from "./modules/computer-mode/computer-mode.component";
import { MoveListComponent } from "./modules/nav-menu/move-list.component";
import { HomeComponent } from "./modules/nav-menu/home.component";
import { NavMenuComponent } from "./modules/nav-menu/nav-menu.component";
import { PlayAgainstFriendDialogComponent } from "./modules/nav-menu/play-against-friend-dialog.component";
import { PlayOptionsDialogComponent } from "./modules/nav-menu/play-options-dialog.component";
import { PlayAgainstComputerDialogComponent } from "./modules/play-against-computer-dialog/play-against-computer-dialog.component";
import { AppRoutingModule } from "./routes/app-routing.module";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { AuthDialogComponent } from "./modules/nav-menu/auth-dialog.component";
import { GeminiChatService } from "./modules/chess-chat/gemini-chat.service";
import { ChatComponent } from "./modules/nav-menu/chat.component";
import { ProfileMenuComponent } from "./modules/nav-menu/profile-menu";





@NgModule({
  declarations: [
    AppComponent,
    ChessBoardComponent,
    ComputerModeComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,  
    NavMenuComponent,
    PlayAgainstComputerDialogComponent,
    MoveListComponent,
    ReactiveFormsModule,
    FormsModule,
    PlayAgainstFriendDialogComponent,
    MatSliderModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    AuthDialogComponent,
    ChatComponent,
    ProfileMenuComponent,
    
  ],
  providers: [GeminiChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }